import { cloneElement } from 'react';
import { ReactElement, useState } from 'react';
import { Trans } from 'react-i18next';
import { Tag } from 'src/components/tag/tag';
import { LanguageType } from 'src/models/resume';
import { FlexRowLayout } from 'src/styles/layouts/flex-layout';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border: 1px solid;
    padding: 25px 15px 15px;
    margin-bottom: 10px;
`;

const Title = styled.span`
    position: absolute;
    top: -10px;
    padding: 0 12px;
    background: ${(props) => props.theme.background};
`;

const ChildWrapper = styled.div<{ active: boolean }>`
    display: ${(props) => (props.active ? 'block' : 'none')};
`;

const TagLayoutContainer = styled.div`
    position: relative;
`;

const TagGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function ResumeFormSection(props: { chinese: ReactElement; english: ReactElement; title: string }) {
    const [lngTemplate, setLngTemplate] = useState<'chinese' | 'english'>('chinese');

    return (
        <TagLayoutContainer>
            <TagGroup>
                <Tag active={lngTemplate === 'chinese'} onClick={() => setLngTemplate('chinese')}>
                    中文
                </Tag>
                <Tag active={lngTemplate === 'english'} onClick={() => setLngTemplate('english')}>
                    English
                </Tag>
            </TagGroup>
            <Container>
                <Title>
                    <Trans>{props.title}</Trans>
                </Title>
                <ChildWrapper active={lngTemplate === 'chinese'}>
                    {cloneElement(props.chinese, { lng: LanguageType.Chinese })}
                </ChildWrapper>
                <ChildWrapper active={lngTemplate === 'english'}>
                    {cloneElement(props.english, { lng: LanguageType.English })}
                </ChildWrapper>
            </Container>
        </TagLayoutContainer>
    );
}

export default ResumeFormSection;
