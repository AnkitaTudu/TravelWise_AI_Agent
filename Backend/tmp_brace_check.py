from pathlib import Path

src = Path("frontend/src/components/AiTripPlanner.tsx").read_text(encoding="utf-8")
depth = 0
for i, line in enumerate(src.splitlines(), 1):
    in_str = False
    q = ""
    esc = False
    for ch in line:
        if in_str:
            if esc:
                esc = False
                continue
            if ch == "\\":
                esc = True
                continue
            if ch == q:
                in_str = False
            continue
        if ch in "\"'`":
            in_str = True
            q = ch
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
    interesting = i >= 385 or i <= 145 or "handleNext" in line or "const steps" in line
    if interesting:
        print(f"{i:3} d={depth:2} {line[:120].encode('ascii', 'replace').decode()}")
print("FINAL", depth)
