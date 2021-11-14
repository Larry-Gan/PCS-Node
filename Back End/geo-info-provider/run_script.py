import sys

from geoinfoprovider.scripts.upload_shapefiles import main as upload_shapefiles_main


# Map script command line argument to relevant "main" function
SCRIPTS = {
    'upload_shapefiles': upload_shapefiles_main
}


def main():
    if len(sys.argv) == 1:
        print('Enter the name of the script you want to run')

    SCRIPTS[sys.argv[1]]()


if __name__ == '__main__':
    main()
