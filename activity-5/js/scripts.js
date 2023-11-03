(function() {
    var data = [
        {
        name: 'Trailing Spaces',
        description: 'Highlight trailing spaces and delete them in a flash!',
        author: 'Shardul Mahadik',
        url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
        downloads: 1690783,
        stars: 55,
        price: 'free',
        selector: 'p1'
        },
        {
            name: 'GitLens — Git supercharged',
            description: 'Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more',
            author: 'GitKraken',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            downloads: 27093036,
            stars: 740,
            price: 'free',
            selector: 'p2'
            }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEL = getEl(selector + '-name'),
        descEL = getEl(selector + '-description'),
        authEL = getEl(selector + '-author'),
        downloadEL = getEl(selector + '-downloads'),
        starsEL = getEl(selector + '-stars');

        nameEL.textContent = package.name;
        descEL.textContent = package.description;
        authEL.textContent = package.author;
        downloadEL.textContent = package.getFormattedDownloads();
        starsEL.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var package1 = new Package(data[0]);
    writePackageInfo(package1);

    var package2 = new Package(data[1]);
    writePackageInfo(package2);
}());