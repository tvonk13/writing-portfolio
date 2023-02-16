import DemoPDF from './assets/demo.pdf';
import DemoProfile from './assets/demo-profile.jpeg';

const demoName = 'Nina Demo';

const demoAbout = {
    "data": {
        "name": [
            {
                "type": "heading1",
                "text": demoName,
                "spans": []
            }
        ],
        "profile_image": {
            "alt": null,
            "copyright": null,
            url: DemoProfile,
        },
        "about": [
            {
                "type": "heading5",
                "text": `Hi, I'm ${demoName}.`,
                "spans": []
            },
            {
                "type": "paragraph",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis cursus in.",
                "spans": []
            },
            {
                "type": "paragraph",
                "text": "Nisi lacus sed viverra tellus in. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Elementum sagittis vitae et leo duis ut. Lacus sed turpis tincidunt id aliquet risus feugiat. Orci nulla pellentesque dignissim enim sit amet. Adipiscing commodo elit at imperdiet dui accumsan. Magna eget est lorem ipsum dolor sit. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Odio tempor orci dapibus ultrices. Quis varius quam quisque id diam vel quam elementum. Consequat id porta nibh venenatis. Commodo odio aenean sed adipiscing diam. Eu nisl nunc mi ipsum.",
                "spans": []
            },
            {
                "type": "paragraph",
                "text": "Neque aliquam vestibulum morbi blandit. Mi quis hendrerit dolor magna eget. Elementum sagittis vitae et leo duis ut diam quam nulla. Habitasse platea dictumst vestibulum rhoncus. Neque vitae tempus quam pellentesque nec. Sed sed risus pretium quam. Nec tincidunt praesent semper feugiat. Molestie at elementum eu facilisis sed odio morbi. Nisl vel pretium lectus quam id leo in vitae. Eget aliquet nibh praesent tristique magna. Molestie ac feugiat sed lectus. Eu sem integer vitae justo eget. Vulputate odio ut enim blandit volutpat maecenas volutpat. Sed augue lacus viverra vitae congue eu.",
                "spans": []
            },
        ]
    }
}

const demoShorts = [
    {
        "uid": "demo-short-1",
        "type": "short",
        "lang": "en-us",
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Demo Short Story 1",
                    "spans": []
                }
            ],
            "description": [
                {
                    "type": "paragraph",
                    "text": "A demo placeholder for a short story.",
                    "spans": []
                }
            ],
            "date": "2022-03-18",
            "pdf": {
                "link_type": "Media",
                "name": "Demo.pdf",
                "kind": "document",
                "url": DemoPDF,
            },
        }
    },
    {
        "uid": "demo-short-2",
        "type": "short",
        "lang": "en-us",
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Demo Short Story 2",
                    "spans": []
                }
            ],
            "description": [
                {
                    "type": "paragraph",
                    "text": "A demo placeholder for a short story.",
                    "spans": []
                }
            ],
            "date": "2022-11-10",
            "pdf": {
                "link_type": "Media",
                "name": "Demo.pdf",
                "kind": "document",
                "url": DemoPDF,
            },
        }
    }
];

const demoPoems = [
    {
        "uid": "demo-poem-1",
        "type": "poem",
        "lang": "en-us",
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Demo Poem 1",
                    "spans": []
                }
            ],
            "description": [
                {
                    "type": "paragraph",
                    "text": "A demo placeholder for a poem.",
                    "spans": []
                }
            ],
            "date": "2022-06-03",
            "pdf": {
                "link_type": "Media",
                "name": "Demo.pdf",
                "kind": "document",
                "url": DemoPDF,
            },
        }
    }
];

const demoEssays = [
    {
        "uid": "demo-essay-1",
        "type": "essay",
        "lang": "en-us",
        "data": {
            "title": [
                {
                    "type": "heading1",
                    "text": "Demo Essay 1",
                    "spans": []
                }
            ],
            "description": [
                {
                    "type": "paragraph",
                    "text": "A demo placeholder for an essay.",
                    "spans": []
                }
            ],
            "date": "2023-01-11",
            "pdf": {
                "link_type": "Media",
                "name": "Demo.pdf",
                "kind": "document",
                "url": DemoPDF,
            },
        }
    }
];

const getDemoWorkByType = (type) => {
    if (type === "short") return demoShorts;
    if (type === "poem") return demoPoems;
    if (type === "essay") return demoEssays;
    return [];
};

export {
    demoName,
    demoAbout,
    getDemoWorkByType,
}