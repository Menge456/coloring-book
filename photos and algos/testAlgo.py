import numpy as np
from skimage import io
from sklearn.cluster import KMeans
import sys


original = io.imread(sys.argv[1])
n_colors = 5

arr = original.reshape((-1, 3))
kmeans = KMeans(n_clusters=n_colors, random_state=42).fit(arr)
labels = kmeans.labels_
centers = kmeans.cluster_centers_
less_colors = centers[labels].reshape(original.shape).astype('uint8')
def compColors(img1, img2):
    for i in range(len(img1)):
        if(img1[i] != img2[i]):
            return False
    return True

res = np.copy(original)
for i in range(0, less_colors.shape[0]):
    for j in range(0, less_colors.shape[1]):
        for x in range(i-2, i+2):
            for y in range(j - 2, j+2):
                if(not (x < 0 or x >= less_colors.shape[0] or y < 0 or y >= less_colors.shape[1])):
                    if(not compColors(less_colors[x][y], less_colors[i][j])):
                        res[i][j] = 0
                        x = i + 2
                        y = j+2 
                    else:
                        res[i][j] = 255
io.imsave("output.jpg", res.astype(np.uint8))

