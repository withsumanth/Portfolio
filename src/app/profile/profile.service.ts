import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'REACT',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'ANGULAR',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVA',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'JAVASCRIPT',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'AWS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Spring/Hibernate',
      'progress': '80%'
    },
    {
      'id': '7',
      'skill': 'Node.js',
      'progress': '85%'
    },
    {
      'id': '8',
      'skill': 'jQuery',
      'progress': '85%'
    },
    {
      'id': '9',
      'skill': 'HTML/CSS/BOOTSTRAP',
      'progress': '85%'
    },
    {
      'id': '10',
      'skill': 'Ruby',
      'progress': '80%'
    }
  ];

  educationData: any = [
     {
       'id': '1',
       'from_to_year': '2017 - 2019',
       'education': 'Master\'s Degree',
       'stream': 'Information Systems',
       'institution': 'Northeastern University, Boston, MA, USA'
     },
    {
      'id': '2',
      'from_to_year': '2010 - 2014',
      'education': 'Bachelor\'s Degree',
      'stream': 'Electronics and Communication',
      'institution': 'Siddaganga Institute of Technology, India'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'June 2018 - December 2019',
      'organization': 'Brightcove, Boston, MA, USA',
      'designation': 'Software Engineer Intern',
      'details': `Worked on creating a website in <strong>JavaScript, Node.js</strong> to allow customers to host their own video portal websites. This was built on <strong>React, jQuery and MongoDB</strong> which runs on <strong>AWS</strong> cloud computing platform. Also I managed <strong>Jenkins</strong> for running continuous integration and created automation scripts using <strong>Ruby</strong> and <strong>Capybara</strong>`
    },
    {
      'id': '2',
      'from_to_month_year': 'December 2014 - July 2017',
      'organization': 'Arisglobal Software Private Limited, India',
      'designation': 'Software Engineer',
      'details': 'Developed a website to interact with reporting tool like <strong>Cognos</strong> to analyze the data in pharmacovigilance by creating user interface which was built on <strong>Spring MVC framework</strong> with <strong>Maven</strong> integration and <strong>Hibernate</strong> and front end technologies like <strong>jQuery, CSS3</strong> and <strong>HTML5</strong> by connecting with <strong>Oracle DB</strong>'
    }
  ];

  projectsData: any = [
    {
      'id': '1',
      'organization': 'Local Search and Discovery Website',
      'details': `Designed a local search-and-discovery service website that provides recommendations based on desired location which has been built using <strong>Angular, HTML5, CSS3, jQuery, Bootstrap, Typescript, Node.js and Express</strong>. The application has been deployed on <strong>AWS, Heroku</strong> cloud platform
`
    },
    {
      'id': '2',
      'organization': 'E-Commerce application',
      'details': 'Designed E-Commerce application on <strong>Spring MVC framework, JSP and jQuery</strong> which has been built using <strong>MySQL</strong> database with <strong>Hibernate</strong> mapping'
    },
    {
      'id': '3',
      'organization': 'Cloud Computing AWS',
      'details': 'Created <strong>CI/CD</strong> pipeline for a <strong>Spring Boot</strong> application using <strong>Git, CircleCI and AWS CodeDeploy</strong>. This platform uses services like <strong>EC2, RDS, DynamoDB, S3, SNS, SES, Lambda, CloudFormation and CloudWatch</strong>. Load testing has been done by enabling <strong>Load Balancer</strong> and creating <strong>Auto scaling groups</strong> using JMeter'
    },
    {
      'id': '4',
      'organization': 'Analysis of Amazon Product Review dataset',
      'details': 'Analyzed average review of the product and found top 100 products of the dataset using <strong>MapReduce</strong> algorithm. This has been Developed using <strong>Hadoop, MongoDB, HBase and PIG</strong>'
    }
  ];
  contactus(data: any): Observable<any> {
    return this.http.post(this.baseUrl , data);
  }

  skills(): Observable<any> {
    return this.skillsData;
  }

  education(): Observable<any> {
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  projects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.projectsData;
  }
}
