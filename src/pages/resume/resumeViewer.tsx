import { Fragment, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import useClientStorage from 'src/hooks/useClientStorage';
import { CssConfig } from 'src/models/css-config';
import { ReduxStorage } from 'src/models/redux-storage';
import { LanguageType } from 'src/models/resume';
import { getResume } from 'src/reducers/resume-slice';
import { useAppDispatch } from 'src/reducers/storage';
import { Text, Options, Option } from 'src/styles/components/shared';
import styled from 'styled-components';

export const ResumeViewer = () => {
    const dispatch = useAppDispatch();

    const { getLanguage } = useClientStorage();
    const { data } = useSelector((state: ReduxStorage) => state.resume);

    useEffect(() => {
        dispatch(getResume());
    }, []);

    return (
        <Container>
            <Header>
                <Text fontSize={24}>Thomas Shih</Text>
                <Text fontSize={16}>0930373567 | tt7919@gmail.com</Text>
            </Header>
            <Content>
                <Summary>{data?.[getLanguage]?.basicInfo.summary}</Summary>

                <Expertise>
                    <Title>Area of Expertise</Title>
                    <Options columns={2} listStyleType={'square'}>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                        <Option>
                            <Text fontSize={16}>Test</Text>
                        </Option>
                    </Options>
                </Expertise>

                <Experiences>
                    <Title>Professional Experience</Title>
                    {data?.[getLanguage]?.workExperiences.map((experience) => (
                        <Experience key={experience.id}>
                            <Text fontSize={18} alignItems={'baseline'}>
                                {experience.companyName}&nbsp;/&nbsp;<Text fontSize={14}>{experience.position}</Text>
                            </Text>
                            {experience.projects.map((project) => (
                                <Fragment key={project.id}>
                                    <Section>
                                        <Text fontSize={17}>{project.name}</Text>
                                        <ReactMarkdown>{project.description}</ReactMarkdown>
                                    </Section>
                                    <Section>
                                        <Text fontSize={17}>Accomplishment</Text>
                                        <ReactMarkdown>{project.accomplish}</ReactMarkdown>
                                    </Section>
                                </Fragment>
                            ))}
                        </Experience>
                    ))}
                </Experiences>

                <Title>About Me</Title>
                <AboutMe>{data?.[getLanguage]?.basicInfo.aboutMe}</AboutMe>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 24px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 12px 0;

    .name {
        font-size: 24px;
        font-weight: bold;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Summary = styled.div`
    width: 40%;
    padding: 12px;
`;

const AboutMe = styled.div`
    width: 40%;
    padding: 12px;
`;

const Title = styled.div`
    width: auto;
    max-width: max-content;
    font-size: 20px;
    padding: 6px 12px;
    border-bottom: 1px solid gray;
    margin: 6px auto;
`;

const Expertise = styled.div`
    width: 35%;
`;
const Experiences = styled.div<CssConfig>`
    width: 70%;
    margin: auto;
`;
const Experience = styled.div``;
const Section = styled.div`
    margin-top: 10px;
    margin-left: 30px;
`;
