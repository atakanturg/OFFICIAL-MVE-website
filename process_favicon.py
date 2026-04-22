from PIL import Image
import numpy as np

img_path = 'public/images/mve_logo.jpg'
img = Image.open(img_path).convert('RGB')
arr = np.array(img)

# Crop bottom 80 pixels to remove watermark safely
h, w, c = arr.shape
if h > 100:
    arr = arr[:h-80, :, :]

result = Image.fromarray(arr)

# Save as png in public
result.save('public/favicon.png')

print("Favicon processed successfully.")
