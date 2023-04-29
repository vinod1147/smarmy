import React from 'react';
import Card from '../components/Card';

function resource() {
    return (
        <div className='py-8'>
            <div>
                <h1 className='text-6xl font-bold text-center p-4 bolt titler'>Resources</h1>
            </div>
            <div className='maindivr'>
                <div className='flex justify-center cardrow'>
                    <Card title={"Plus Courses 9 & 10"} description={"The above courses are only for the plus Unacademy Learner"} button={"EXPLORE"} link={"https://unacademy.com/@sciencemadness/courses?goal=SUVLV&type=plus"} />
                    <Card title={"Free Classes"} description={"Anyone who have account can access this"} button={"EXPLORE"} link={"https://unacademy.com/@sciencemadness/courses?goal=all&type=special"} />
                    <Card title={"Batches"} description={"Explore Batches (includes Partial and Full Syllabus Batches)"} button={"EXPLORE"} link={"https://unacademy.com/@sciencemadness/courses?goal=all&type=batch"} />
                </div>
                <div className='flex justify-center cardrow'>
                    <Card title={"Notes (Only for Plus)"} description={"Notes provided by the Educator (Only for Plus and Iconic Learners)"} button={"EXPLORE"} link={"https://docs.google.com/forms/d/e/1FAIpQLSesvUTFdthLmGRW6IXTjbvk1xPZoDGtEJfa8tG_GqqprPJk2g/viewform?usp=sf_link"} />
                    <Card title={"CBSE Class 9 Practice"} description={"Practice question for CBSE class 9 Learners"} button={"PRACTICE"} link={"https://unacademy.com/@sciencemadness/practices?goal=SUVLV&type=dpp"} />
                    <Card title={"CBSE Class 10 Practice"} description={"Practice question for CBSE class 10 Learners"} button={"PRACTICE"} link={"https://unacademy.com/@sciencemadness/practices?goal=GSZGO&type=dpp"} />
                </div>
                <div className='flex justify-center cardrow'>
                    <Card title={"Telegram"} description={"Telegram Group for all learners on Unacademy"} button={"JOiN NOW"} link={"https://telegram.me/sciencemadness10"} />
                    <Card title={"Telegram (Plus/Iconic)"} description={"Telegram discussion group dedicatedly for Plus/Iconic learners"} button={"JOiN NOW"} link={"https://docs.google.com/forms/d/e/1FAIpQLScri2CC0nBCgrF91YRzksnvr2ov9_dPhi6tohbKCXkgeaZHwA/viewform?usp=sf_link"} />
                    <Card title={"YouTube - Science Madness"} description={"Science Madness on Youtube 😅"} button={"SUBSCRIBE"} link={"https://www.youtube.com/@Sciencemadness?sub_confirmation=1"} />
                </div>
            </div>
        </div>
    );
}

export default resource;
