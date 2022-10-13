import { FormInput } from 'src/components/forms/form-input';
import Calendar from 'react-calendar';
import { useEffect, useRef, useState } from 'react';
import { useToggle } from 'src/hooks/useToggle';
import { useClickAway } from 'src/hooks/useClickAway';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Container = styled.div`
    position: relative;
    height: 100%;
`;

const CalendarPanel = styled.div`
    position: absolute;
    left: 0;
    background: white;
`;

interface FormDateProps {
    value?: string;
    callback: (e: string) => void;
}

export const FormDate = ({ value, callback }: FormDateProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, onShow] = useToggle(false);
    const [date, onChangeDate] = useState(value ? new Date(value) : new Date());

    useClickAway(ref, () => {
        onShow(false);
    });

    const onSelect = (e: Date) => {
        onChangeDate(e);
        callback(e.toISOString());
        onShow(false);
    };

    return (
        <Container ref={ref}>
            <FormInput
                name="companyName"
                callback={() => {}}
                onClick={() => onShow(true)}
                value={moment(date).format('YYYY/MM/DD')}
            ></FormInput>
            {show && (
                <CalendarPanel>
                    <Calendar onChange={onSelect} value={date}></Calendar>
                </CalendarPanel>
            )}
        </Container>
    );
};
