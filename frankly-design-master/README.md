### 회원가입
* input 양식 에러발생 시 해당 input 부모 label 태그에 `sign-up-form--error` 클래스 추가
```html
<form class="sign-up-form">
    ...
    <label class="sign-up-form--error">...</label>
    ...
</form>
```
* 이메일, 비밀번호, 지역, 약관동의 체크 후 가입완료
* 약관동의 텍스트 클릭 시 모달창 or 팝업창으로 내용 보여주기

### 게시글
* 댓글 답글은 class에 `comments__box--reply` 추가
```html
<li class="comments__box comments__box--reply">
    ...
</li>
```