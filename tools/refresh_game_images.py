"""Copy fresh game screenshots into img/, for the nightly local screenshot task.

Run from the portfolio folder:
  python tools/refresh_game_images.py settlers <dir>      # settlers-*.webp from catan's tools/portfolio-shots.mjs
  python tools/refresh_game_images.py broken-blade <dir>  # *_clean.png from Broken Blade's tools/make_portfolio_shots.py

Only images that already exist in img/ are replaced (new shots need a gallery entry
in content.js first). Prints each file it wrote.
"""
import os
import shutil
import sys

from PIL import Image

IMG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "img")

# Broken Blade: portfolio image <- screenshot from make_portfolio_shots.py.
BROKEN_BLADE = {
    "broken-blade-foothills": "02_foothills",
    "broken-blade-glade": "03_sunken_glade",
    "broken-blade-centipede": "04_guardian_centipede",
    "broken-blade-village": "05_frozen_village",
    "broken-blade-icefall": "07_icefall_hall",
    "broken-blade-colossus": "08_frost_colossus",
    "broken-blade-colossus-unbound": "09_frost_colossus_unbound",
    "broken-blade-refuge": "10_refuge",
    "broken-blade-fire-slopes": "11_fire_slopes",
    "broken-blade-drake": "12_ashen_drake",
    "broken-blade-drake-unbound": "13_ashen_drake_unbound",
    "broken-blade-peaks": "15_lightning_peaks",
    "broken-blade-stormcaller-bound": "17_stormcaller_bound",
    "broken-blade-stormcaller": "18_stormcaller",
    "broken-blade-last-stand": "20_last_stand",
}


def settlers(src):
    for name in sorted(os.listdir(src)):
        if name.startswith("settlers") and name.endswith(".webp") and os.path.exists(os.path.join(IMG, name)):
            shutil.copyfile(os.path.join(src, name), os.path.join(IMG, name))
            print(name)


def broken_blade(src):
    for name, shot in BROKEN_BLADE.items():
        path = os.path.join(src, shot + "_clean.png")
        if not os.path.exists(path):
            print("missing", shot)
            continue
        im = Image.open(path).convert("RGB").resize((1600, 900), Image.LANCZOS)
        im.save(os.path.join(IMG, name + ".webp"), quality=88, method=6)
        print(name + ".webp")


if __name__ == "__main__":
    if len(sys.argv) != 3 or sys.argv[1] not in ("settlers", "broken-blade"):
        sys.exit(__doc__)
    (settlers if sys.argv[1] == "settlers" else broken_blade)(sys.argv[2])
