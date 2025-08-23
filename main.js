document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('command');
    const output = document.getElementById('cmd-response');

    // text submission handler
    function handleSubmit() {
        const inputText = input.value.trim();

        if(inputText) {

            //clear existing info
            output.innerHTML = '';

            //write what i want for this command
            processCommand(inputText);

            input.value = '';
            input.focus();
        }
    }

    function processCommand(cmd) {
        const newOutput = document.createElement('div');
        newOutput.className = 'output-text';

        switch(cmd.toLowerCase()) {
            // tells user about the commands they have
            case 'help':
                newOutput.innerHTML = `Type a one-word command, then press enter. Useful commands to know:<br>
                - 'help': pops up this message, which shows available commands<br>
                - 'whoami': learn about me<br>
                - 'projects': check out what i've been up to lately<br>
                - 'project_name': read about my experience tackling one of the sidequests my curiosity led me to<br>
                - 'contact': find out how you can get in touch<br>
                - 'cv': if you're an employer, this one's for you, gets you straight to the download page<br>
                <br>
                If you're a dev, go ahead and have some fun trying to find the easter eggs, they're all commands you've probably worked with a million times. If you're
                an average Joe, I know this may seem like a lot, but don't worry, you can still have your fun here. If you're not comfortable using this box you've entered the message in, that's fine, go
                ahead and explore everything as it is, there's a button for just about anything.`;
                break;
            // lists all projects
            case 'projects':
                break;
            // about me page
            case 'whoami':
                newOutput.innerHTML = 'it\'s you dummy';
                break;
            //easter egg #1
            case 'sudo':
                newOutput.innerHTML = 'well well...look who we have here';
                break;
            // easter egg #2
            case 'secret':
                break;
            default:
                newOutput.innerHTML = 'that don\'t seem like a good command to me...';
                break;
        }

        output.appendChild(newOutput);
    }

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
});