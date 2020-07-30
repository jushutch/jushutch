#!/usr/bin/python

import sys, os
from ffmpy import FFmpeg

inputFilename = str(sys.argv[1]);
os.system("cp " + inputFilename + " temp.mp4")
ff = FFmpeg(
        inputs = {'temp.mp4' : None},
        outputs = {'output.gif': '-vf "fps=10,scale=1000:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse"'}
        )
print(ff.cmd)
ff.run()
