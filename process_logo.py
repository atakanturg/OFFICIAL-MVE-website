from PIL import Image
import numpy as np
import sys

img_path = 'public/images/mve_logo.jpg'
img = Image.open(img_path).convert('RGBA')
arr = np.array(img)

# Crop bottom 80 pixels to remove watermark safely
h, w, c = arr.shape
if h > 100:
    arr = arr[:h-80, :, :]

r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]

# Make dark colors (close to black) transparent
# Using a threshold that safely removes the black background
mask = (r < 25) & (g < 25) & (b < 25)
arr[:, :, 3][mask] = 0

result = Image.fromarray(arr)

# Get the bounding box of the non-transparent pixels to crop tight
bbox = result.getbbox()
if bbox:
    result = result.crop(bbox)

# Save as png in public
result.save('public/mve-logo-transparent.png')
result.save('public/favicon.png')

print("Logo processed successfully.")
