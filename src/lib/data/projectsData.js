// Images
import projectImage from '$lib/images/projects/projectPlaceholder2.jpg'

const data = [
    {
        id: 1,
        projectName: 'Cough it',
        projectType: 'Research Paper',
        projectImg: projectImage,
        shortDesc: 'ConvNet model that classifies COVID-19 from cough sounds, achieving 87.07 AUC score.', //10 words max
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
        shortDesc: 'ConvNet model that detects skin lesions, explains predictions with Grad-CAM',
        longDesc: 'This project uses a convNet model for detection of skin lesion detection and uses Grad-CAM for explaining the prediction of the model. It uses a modified version of the skin-mnist dataset which only contains the classes nv, bkl, mel (around 550 images of each).',
        github: 'https://github.com/KaviiSuri/GradCamProjectRepo',
        paper: '',
        members: ['Kavii Suri', 'Yash Tripathi']
    },
    {
        id: 3,
        projectName: 'Segmented sequence modeling in Indian classical music',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'VAE detects landmarks in Indian Classical Music, published in IEEE 2022.',
        longDesc: 'This paper is published under IEEE Silicon Conference 2022. The idea of learning the domain knowledge using Variational AutoEncoder(VAE) to detect the stated landmark in Indian Classical Music(ICM).',
        github: '',
        paper: 'https://ieeexplore.ieee.org/document/10028921',
        members: ['Yash Tripathi', 'Shuvra Neel Roy']
    },
    {
        id: 4,
        projectName: 'Textual Entailment as an Evaluation Metric for Abstractive Text Summarization',
        projectType: 'Research Paper',
        projectImg: projectImage,
        shortDesc: 'NLP that model summarizes text using Abstract Summarization and Textual Entailment.',
        longDesc: 'This project is an NLP model which summarizes text using technique Abstract Summarization with the help of Textual Entailment.',
        github: '',
        paper: '',
        members: ['Kavii Suri', 'Saranga K. Mahanta', 'Swagat Bhuyan']
    },
    {
        id: 5,
        projectName: 'Emotion Detection in Images of Faces',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Keras model that Classifies happy/sad faces using CNN.',
        longDesc: 'This was a Keras model that does a happy/sad classification of images of faces. This project was made using Convolutional Neural Network under deeplearning.ai specialization on Coursera.',
        github: 'https://github.com/YashTripathi-1729-19/Deep-Learning-Note-Books/blob/main/Face_Recognition_v3a.ipynb',
        paper: '',
        members: ['Yash Tripathi']
    },
    {
        id: 6,
        projectName: 'Autonomous driving application Car detection',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Keras model that detects objects in images using YOLO and CNN.',
        longDesc: 'This project was a Keras model that detects objects such as cars, buses, pedestrians, etc which are in the image taken by the front camera of the car. This project is made using YOLO algorithm and Convolutional Neural Network in deeplearning.ai specialization on Coursera.',
        github: 'https://github.com/YashTripathi-1729-19/Deep-Learning-Note-Books/blob/main/Autonomous_driving_application_Car_detection_v3a.ipynb',
        paper: '',
        members: ['Yash Tripathi']
    },
    {
        id: 7,
        projectName: 'RoadMent',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Segments roads from satellite images; won 2nd in Anveshan 2022.',
        longDesc: 'An end-to-end project based on Image Segmentation. A website was developed, where if a useruploads a satellite image the model will segment out the roads from the images. The U-Net architecture was used for our model and it was a group project. Main role here was to handle the data, build the model and fine tune it accordingly. Model perfomance was based on IoU score and the loss was Dice-Coefficient loss. Training IoUscore was 0.497 and validation IoU score was 0.415. It was the 2nd Best Project from East Zone in Anveshan National Student Research Convention 2021-2022 and was in Anveshan representing NIT Silchar.',
        github: 'https://github.com/Krishnav-Rajbangshi/Roadment',
        paper: '',
        members: ['Krishnav Rajbangshi', 'Md.Faizal Karim']
    },
    {
        id: 8,
        projectName: 'Clean/Dirty Road Classifier',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Identifies clean/dirty roads using Transfer Learning; 97.1% training accuracy.',
        longDesc: 'Project is based on ConvNets and Transfer Learning, and is used to identify whether a road is clean or dirty. MobileNet was used as our base architecture and the weights are based on imagenNet. Web Scraping techniques were used to download images of both clean and dirty roads from the internet. The results of this model was pretty good, with a training accuracy of 97.1% and validation accuracy of 91.6%.',
        github: 'https://github.com/Krishnav-Rajbangshi/Clean-Dirty-Road-Classifier',
        paper: '',
        members: ['Krishnav Rajbangshi','Md.Faizal Karim']
    },
    {
        id: 9,
        projectName: 'DiagnoAI',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'DiagnoAI detects diseases from text using fine-tuned BERT for 24 diseases.',
        longDesc: "DiagnoAI is a tool to detect a disease from a text description of the patient's symptoms and daily condition. It is based on a transformer model called BERT, fine-tuned for 24 common diseases.",
        github: 'https://github.com/Krish2002/DiagnoAI',
        paper: '',
        members: ['Krish Sharma', 'Md. Faizal karim', 'Niyar R barman']
    },
    {
        id: 10,
        projectName: 'CalmSpace',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Analyzes recorded emotions, predicts sentiment with RNN, visualizes through graphs.',
        longDesc: "CalmSpace is an end to end sentiment analysis platform where the user can record or upload the recorded files of their emotion and the deep learning model will learn through algorithm like RNN Model Architecture, and will predict the emotion of the voice . The sentiment analysis will be shown through various graph plot in much understandable way.",
        github: 'https://github.com/Krish2002/calmspace',
        paper: '',
        members: ['Krish Sharma']
    },
    {
        id: 11,
        projectName: 'Flood Segmentation',
        projectType: 'Project',
        projectImg: projectImage,
        shortDesc: 'Flood segmentation model identifies flooded areas from aerial images using deep learning.',
        longDesc: 'Flood segmentation is a deep learning model that segments flooded area from aerial images.',
        github: 'https://github.com/Krish2002/Flood-Segmentation',
        paper: '',
        members: ['Krish Sharma', 'Md.Faizal Karim']
    },
]

export default data;