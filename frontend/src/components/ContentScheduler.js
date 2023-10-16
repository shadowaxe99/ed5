import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { scheduleContent } from '../redux/actions';

const ContentScheduler = () => {
    const [content, setContent] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(scheduleContent(content, scheduleTime));
        setContent('');
        setScheduleTime('');
    };

    return (
        <div id="content-scheduler">
            <h2>Content Scheduler</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Content:
                    <textarea value={content} onChange={e => setContent(e.target.value)} required />
                </label>
                <label>
                    Schedule Time:
                    <input type="datetime-local" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} required />
                </label>
                <button type="submit">Schedule Content</button>
            </form>
        </div>
    );
};

export default ContentScheduler;