import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MISSING_DIR = ROOT / "missing_targets"
OUT_DIR = ROOT / "docs_live_v4_missing_seed"


def read_lines(path: Path) -> list[str]:
    if not path.exists():
        return []
    return [line.strip() for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def safe_slug(value: str) -> str:
    return "".join(ch if ch.isalnum() or ch in "-_." else "-" for ch in value).strip("-")


def write_seed_file(path: Path, title: str, link: str, kind: str) -> None:
    body = [
        f"# {title}",
        "",
        f"- Kind: `{kind}`",
        f"- Source: `{link}`",
        "",
        "## Extracted Data",
        "",
        "```json",
        "{}",
        "```",
        "",
        "## Notes",
        "",
        "- Fill this file with parsed request/response/schema details from the source page.",
    ]
    path.write_text("\n".join(body) + "\n", encoding="utf-8")


def main() -> None:
    ops = read_lines(MISSING_DIR / "missing_operations.txt")
    schemas = read_lines(MISSING_DIR / "missing_schemas.txt")

    ops_dir = OUT_DIR / "operations"
    schemas_dir = OUT_DIR / "schemas"
    ops_dir.mkdir(parents=True, exist_ok=True)
    schemas_dir.mkdir(parents=True, exist_ok=True)

    ops_index = ["# Missing Operations", "", "Source base: `https://admin-ui.dev-sandbox.workload.avantos-ai.net/docs#/operations/`", ""]
    schema_index = ["# Missing Schemas", "", "Source base: `https://admin-ui.dev-sandbox.workload.avantos-ai.net/docs#/schemas/`", ""]

    manifest = {
        "operations": [],
        "schemas": [],
    }

    for op in ops:
        link = f"https://admin-ui.dev-sandbox.workload.avantos-ai.net/docs#/operations/{op}"
        file_name = f"{safe_slug(op)}.md"
        write_seed_file(ops_dir / file_name, op, link, "operation")
        ops_index.append(f"- [{op}](operations/{file_name})")
        manifest["operations"].append({"title": op, "link": link, "file": f"operations/{file_name}"})

    for schema in schemas:
        link = f"https://admin-ui.dev-sandbox.workload.avantos-ai.net/docs#/schemas/{schema}"
        file_name = f"{safe_slug(schema)}.md"
        write_seed_file(schemas_dir / file_name, schema, link, "schema")
        schema_index.append(f"- [{schema}](schemas/{file_name})")
        manifest["schemas"].append({"title": schema, "link": link, "file": f"schemas/{file_name}"})

    (OUT_DIR / "operations.index.md").write_text("\n".join(ops_index) + "\n", encoding="utf-8")
    (OUT_DIR / "schemas.index.md").write_text("\n".join(schema_index) + "\n", encoding="utf-8")
    (OUT_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    print(f"Created seed structure at: {OUT_DIR}")
    print(f"Operation files: {len(ops)}")
    print(f"Schema files: {len(schemas)}")


if __name__ == "__main__":
    main()

