const quiz = [
    {
        question:'次のうちネコ科の動物はどれ？',
        answers:['ウサギ','犬','ライオン','ゾウ'],
        correct:'ライオン'
    },{
        question:'次のうち野菜はどれ？',
        answers:['掃除機','キャベツ','靴下','机'],
        correct:'キャベツ'
    },{
        question:'1+1の正しい答えはどれ？',
        answers:['1','2','3','4'],
        correct:'2'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength ){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }
    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がも無ければこちらを実行
        window.alert('終了!あなたの正解数は'+ score +'/'+ quizLength + 'です!');
    }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handleIndex++;
}