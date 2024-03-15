import os

def generate_context(directory):
    prefix = lambda x : f'The SigML HanNoSys for the word {x}:\n'
    context = ""

    # List all files in the directory
    files = os.listdir(directory)

    # Iterate over each file
    for file in files:
        # Construct the file path
        file_path = os.path.join(directory, file)
        
        # Check if the file is a regular file (not a directory)
        if os.path.isfile(file_path):
            # Open the file and read its contents
            with open(file_path, 'r') as f:
                # Read the contents of the file
                contents = f.read()
                contents = format_contents(contents)

                context += f"\n{prefix(extract_file_name(file))} {contents}"
    return context
    
def format_contents(contents):
    contents.replace('\n', '\\n')
    contents.replace('"','\\"')
    contents.replace("\t","\\t")
    contents = contents + "\n"
    return contents

def extract_file_name(file_path):
    # Find the index of '.sigml' in the text
    dot_sigml_index = file_path.rfind('.sigml')

    # Extract the substring between the last '\' and '.sigml'
    desired_text = file_path[0:dot_sigml_index]

    return desired_text

def main():
    # Provide the directory path
    directory = 'SignFiles'

    context_prefix = "You are to translate words into their equivalent SigML HanNoSys code which will be given to another program that will animate based on the code given. These are examples of words and their sigML HanNoSys code. You will also be able to translate who sentences."

    # Call the function to read files in the directory
    context = generate_context(directory)
    print(context)

if __name__ == "__main__":
    main()