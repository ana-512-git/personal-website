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
                newOutput.innerHTML = `Type a <span class="emphasis">one-word command</span>, then press <span class="emphasis">enter</span>. Useful commands to know:<br>
                <br>
                - <span class="command-style">'help'</span>: pops up this message, which shows available commands<br>
                - <span class="command-style">'whoami'</span>: learn about me<br>
                - <span class="command-style">'projects'</span>: check out what i've been up to lately<br>
                - <span class="command-style">'project_name'</span>: read about my experience tackling one of the sidequests my curiosity led me to<br>
                - <span class="command-style">'contact'</span>: find out how you can get in touch<br>
                - <span class="command-style">'cv'</span>: if you're an employer, this one's for you, it gets you straight to the download page<br>
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
                newOutput.innerHTML = `Hi, there!👋<br>
                <br>
                I'm Ana, a 20-something girl with a passion for <b>all things tech-related</b> and the curiosity of about ten people. If you're skeptical about this statement,
                go ahead and type - <span class="command-style">'projects'</span> in this command line and you'll see exactly what I mean. <br><br>
                While I'm currently studying <b>Computer Science</b>, in my free time
                I do all sorts of side quests, like take part in competitions (<b>check out how I prototyped a rocket for an NSS competition in 'Soteria', my first 
                hackathon experience in 'HackItAll 2025' and how i built an actual RC airplane for a student competition in 'WIFI Controlled Airplane'</b>), volunteer at my 
                university's student organization (where I'm currently the <b>IT Team 
                Lead responsible for the web application for a student trivia competition</b>), or sometimes stumble upon new exciting things that have nothing to do with
                my schoolwork (<b>like game development, web development, graphic design and just about whatever else sounds exciting</b>). <br>
                <br>
                Before you ask, yes, I do have a life that doesn't revolve around my laptop. I genuinley enjoy all kinds of physical activity, and I have for as long as I remember. My current 
                sports-related fixation is going to the gym, since I've recently gotten injured and most other physical activities are off-limits, but I'm planning
                to start training for a marathon next spring. My one true love is coffee, and I will never be caught saying no to a coffee ever in my life.
                I enjoy reading on my commute to school (and before you ask, no, I will not choose one single book
                as my favourite, it's impossible, but I will happily recommend some titles if asked) and trying the most random recipes the internet puts in front 
                of my eyes (they turn out edible 90% of the time).`;
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