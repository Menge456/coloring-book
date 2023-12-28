import cv2
import numpy as np
from skimage import io

def gaussian_kernel(size, sigma=1):
    size = int(size) // 2
    x, y = np.mgrid[-size:size+1, -size:size+1]
    normal = 1 / (2.0 * np.pi * sigma**2)
    g =  np.exp(-((x**2 + y**2) / (2.0*sigma**2))) * normal
    return g

def applyKernel(matrix, kernel):
    return cv2.filter2D(matrix, -1, kernel)

original = cv2.imread(
    filename='balls.jpg',
    flags=cv2.IMREAD_GRAYSCALE
    )

g = gaussian_kernel(5)
copy = applyKernel(matrix=original, kernel=g)

io.imshow(copy.astype(np.uint8))
io.show()

dotCloud = []