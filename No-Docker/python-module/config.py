from configparser import ConfigParser
def config(filename='database.ini', section='postgres'):
    parser = ConfigParser()
    parser.read(filename)

    db = {}
    if parser.has_section(section):
        parameters = parser.items(section)
        for parameter in parameters:
            db[parameter[0]] = parameter[1]
        return db    
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))