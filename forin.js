const member = {
    firstMember: {
        name: '김종찬',
        id: 'kjc',
        password: 1234,
        adress: '시흥시',
        phone: 010 - 1234 - 5678,
        age: 29,
    },
    secondMember: {
        name: '홍길동',
        id: 'hgd',
        password: 5678,
        adress: '서울시',
        phone: 010 - 5678 - 1234,
        age: 30
    }
}



/* 회원정보 삭제*/

/*
function delMember() {
    const userName = document.querySelector("#name").value;
    for (let key in member) {
        let memberName = member[key]; 
        if (userName === memberName.name ) {
            alert('회원정보가 삭제되었습니다');
            return delete member[key];
        }
    }
    alert('회원정보가 없습니다.');
}
*/