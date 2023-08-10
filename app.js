// Homepage

const getStarted = document.getElementById('getStarted').addEventListener('click',goToSignUpPage)

const loginFromHeader = document.getElementById('loginFromHeader').addEventListener('click',goToLoginPage)

const signUp = document.getElementById('signUpFromHeader').addEventListener('click',goToSignUpPage)

// Signup

const signUpEmail = document.getElementById('signUpEmail').addEventListener('input',validateEmailGiveFeedBack)

const errorMessage = document.getElementById('email-error')

const errorMessageIcon = document.getElementById('errorMessageIcon')

const signUpPassword =  document.getElementById('signUpPassword').addEventListener('blur',validatePasswordGiveFeedBack)

const confirmPassword = document.getElementById('confirmPassword').addEventListener('keyup',compareAndConfirmPassword)

const finishedSigningUp =document.getElementById('finishedSigningUp').addEventListener('click',redirectToContentGenerator)

const alreadyHaveAccount = document.getElementById('alreadyHaveAccount').addEventListener('click',goToLoginPage)

// Login/sign in
const loginEmail =document.getElementById('loginEmail').addEventListener('input',validateEmailGiveFeedBack)

const loginPassword =document.getElementById('loginPassword').addEventListener('input',validatePasswordGiveFeedBack)

const signInReturningUser =document.getElementById('signInReturningUser').addEventListener('click',goToLoginPage)

const notRegisteredYet =document.getElementById('notRegisteredYet').addEventListener('click',goToSignUpPage)

// Content generator
const logout = document.getElementById('notRegisteredYet').addEventListener('click',goToLoginPage)

const savedIdeas = document.getElementById('savedIdeas').addEventListener('click',redirectToSavedIdeas)

const topic = document.getElementById('topic').addEventListener('input',processTopic)

const selectIndustry = document.getElementById('industry').addEventListener('change',runIndustrySelection) 

const keyword = document.getElementById('keyword').addEventListener('input',processKeyword) 

const typeOfContent = document.getElementById('typeOfContent').addEventListener('change',typeOfContent) 

const goal = document.getElementById('goal').addEventListener('input',processGoal)





