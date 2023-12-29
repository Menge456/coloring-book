import cv2
import numpy as np
from matplotlib import pyplot as pp

def applyKernel(matrix, kernel):
    return cv2.filter2D(matrix, -1, kernel)

def gaussian_kernel(size, sigma=1):
    size = int(size) // 2
    x, y = np.mgrid[-size:size+1, -size:size+1]
    normal = 1 / (2.0 * np.pi * sigma**2)
    g =  np.exp(-((x**2 + y**2) / (2.0*sigma**2))) * normal
    return g

def sobel_filters(matrix):
    Kx = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], np.float32)
    Ky = np.array([[1, 2, 1], [0, 0, 0], [-1, -2, -1]], np.float32)

    Ix = applyKernel(matrix, Kx)
    Iy = applyKernel(matrix, Ky)
    
    G = np.hypot(Ix, Iy)
    G = G / G.max() * 255
    theta = np.arctan2(Iy, Ix)
    
    return (G, theta)

def clahe_filter(matrix):
    # average = 0
    # for x in np.nditer(matrix):
    #     average += x
    # average /= (matrix.size)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    return clahe.apply(matrix.astype(np.uint8))
    # eturn cv2.adaptiveThreshold(matrix.astype(np.uint8), 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 3, 0)


original = cv2.imread(
    filename='patrick.jpg',
    flags=cv2.IMREAD_COLOR
)

g = gaussian_kernel(5)
copy = applyKernel(matrix=cv2.cvtColor(original, cv2.COLOR_BGR2GRAY), kernel=g)
sobel = sobel_filters(copy)[0]
inverted = abs(255 - sobel)
filtered = clahe_filter(inverted)

pp.subplot(131),pp.imshow(cv2.cvtColor(original, cv2.COLOR_BGR2RGB)),pp.title('Original')
pp.subplot(132),pp.imshow(inverted, cmap="gray"),pp.title('Process 1')
pp.subplot(133),pp.imshow(filtered, cmap="gray"),pp.title('Process 2')
pp.show()