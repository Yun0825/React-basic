import logo from './logo.svg';
import './App.css';
import Profile from '../basic/components/profile';
import Avatar from '../basic/components/avatar';

function AppProfile() {

  const handleClick = (e) => {
    console.log(e)
    alert("button이 클릭됨")
  }

  return (
    <>
    <button onClick={handleClick}>버튼</button>
    {/*handleClick() 은 Return한 값을 호출*/}
    <Avatar
     isNew= 'true'
     image = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    />
      <Profile
      isNew= 'true'
      image = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
      name ='James Kim'
      title ='프론트엔드 개발자'/>
      <Profile
      image = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" 
      name = "Anna Young"
      title = "백엔드 개발자"
      />
      <Profile
        image = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name = "Bob Yu"
        title = "프론트엔드 개발자"
      />
    </>
  );
}

export default AppProfile;