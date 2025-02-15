import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [{
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ]});

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, i) => (
            <li key={i}>
                {person.name}의 멘토는 {mentor.name} ({mentor.title})
            </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`)
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
          setPerson(prev => ({
            ...prev, mentors: prev.mentors.map(mentor => {
                if(mentor.name === prevName){
                    return {...mentor, name:current}
                }

                return mentor;
            })
          }))
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
