"""data/ の年度JSをスキャンし、index.html の読み込み一覧を自動更新。"""
from pathlib import Path
from html import escape

root = Path(__file__).resolve().parent
index = root / "index.html"
source = index.read_text(encoding="utf-8")
start = '<!-- YEAR_SCRIPTS_START -->'
end = '<!-- YEAR_SCRIPTS_END -->'
if source.count(start) != 1 or source.count(end) != 1:
    raise RuntimeError('index.html の読み込み欄が見つかりません')
paths = sorted((p.relative_to(root).as_posix() for p in (root / 'data').rglob('*.js')))
lines = '\n'.join('  <script src="' + escape(path, quote=True) + '"></script>' for path in paths)
before, rest = source.split(start, 1)
_, after = rest.split(end, 1)
index.write_text(before + start + '\n' + lines + '\n  ' + end + after, encoding='utf-8')
print(f'{len(paths)} 個の年度ファイルを登録しました。')
