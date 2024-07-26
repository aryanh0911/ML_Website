// Images
import projectImage from '$lib/images/projects/projectPlaceholder2.jpg'

const data = [
    {
        id: 1,
        projectName: 'Cough it',
        projectType: 'Research Paper',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper', //10 words max
        longDesc: 'This project takes a deep learning approach to analyze the acoustic dataset containing cough sound recordings of both COVID-19 positive and negative individuals. It proposes a ConvNet model that performs the classification between COVID-19 positive and negative with a notable AUC score of 87.07 on the blind test set provided by the same for unbiased evaluations of the models. The model takes in 15 MFCC features of the sound examples as input and produces the probability score of the classification as output.',
        github: '',
        paper: 'https://dicova2021.github.io/docs/reports/team_Brogrammers_DiCOVA_2021_Challenge_System_Report.pdf',
        members: ['Darsh Kaushik', 'Saranga K. Mahanta']
    },
    {
        id: 2,
        projectName: 'Grad-CAM for the skin-mnist dataset for skin lesion diagnosis',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: 'This project uses a convNet model for detection of skin lesion detection and uses Grad-CAM for explaining the prediction of the model. It uses a modified version of the skin-mnist dataset which only contains the classes nv, bkl, mel (around 550 images of each).',
        github: 'https://github.com/KaviiSuri/GradCamProjectRepo',
        paper: '',
        members: ['Kavii Suri', 'Yash Tripathi']
    },
    {
        id: 3,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 4,
        projectName: 'Project-1',
        projectType: 'Research Paper',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 5,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 6,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 7,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 8,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 9,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 10,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
    {
        id: 11,
        projectName: 'Project-1',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'One liner about the project/paper',
        longDesc: '',
        github: '',
        paper: '',
        members: ['']
    },
]

export default data;