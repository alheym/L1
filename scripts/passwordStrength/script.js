document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("passwordInput");
  const analyzeButton = document.getElementById("analyzeButton");
  const result = document.getElementById("result");
  const passwordValue = document.getElementById("password");

  analyzeButton.addEventListener("click", function () {
    const password = passwordInput.value;
    const complexity = analyzePassword(password);
    result.textContent = `${complexity}`;
    passwordValue.textContent = `Пароль: ${passwordInput.value}`;
  });

  function hasLowerCaseChars(password) {
    return /[a-z]/.test(password);
  }

  function hasUpperCaseChars(password) {
    return /[A-Z]/.test(password);
  }

  function hasNumericChars(password) {
    return /[0-9]/.test(password);
  }

  function hasSpecialChars(password) {
    return /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",.<>?]/.test(password);
  }

  function analyzePassword(password) {
    if (password.length < 8) {
        return "Слишком короткий пароль. Рекомендуется использовать не менее 8 символов.";
    }

    const lowerCase = hasLowerCaseChars(password);
    const upperCase = hasUpperCaseChars(password);
    const numeric = hasNumericChars(password);
    const special = hasSpecialChars(password);

    if (lowerCase && upperCase && numeric && special) {
        return "Сильный пароль";
    } else if ((lowerCase && upperCase) || (numeric && special) || (numeric && lowerCase) || (numeric && upperCase)) {
        const suggestions = [];
        if (!lowerCase) suggestions.push("использовать символы в нижнем регистре");
        if (!upperCase) suggestions.push("использовать символы в верхнем регистре");
        if (!numeric) suggestions.push("включить цифры");
        if (!special) suggestions.push("включить специальные символы");
        return `Средний пароль. Рекомендации: ${suggestions.join(", ")}`;
    } else {
        const suggestions = [];
        if (!lowerCase) suggestions.push("использовать символы в нижнем регистре");
        if (!upperCase) suggestions.push("использовать символы в верхнем регистре");
        if (!numeric) suggestions.push("включить цифры");
        if (!special) suggestions.push("включить специальные символы");
        return `Слабый пароль. Рекомендации: ${suggestions.join(", ")}`;
    }
}
});
