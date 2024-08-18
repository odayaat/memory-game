odaya attia 
346328040
odayaat@edu.hac.ac.il

## Score Calculation

The score in our memory game is calculated based on the number of moves taken, the number of cards, and the time taken to complete the game. Below is the detailed explanation of the score calculation:

1. **Base Score**: Each card contributes a base score of 50 points.
2. **Move Penalty**: For each move made by the player, a penalty of 5 points is deducted from the score.
3. **Time Penalty**: For each second taken to complete the game, a penalty of 1 point is deducted from the score.

The final score is calculated using the following formula:

```
finalScore = (numCards * 50) - (numMoves * 5) - timePenalty
```

where:
- `numCards` is the total number of cards in the game.
- `numMoves` is the total number of moves made by the player.
- `timePenalty` is the total time taken to complete the game in seconds.

To ensure the score is not negative, if the calculated score is less than zero, it is set to zero. The final score is also rounded to the nearest whole number.

Here's the code snippet that performs the score calculation:

```javascript
const calculateScore = (numMoves, numCards, duration) => {
    const baseScore = numCards * 50; // Base score: 50 points per card
    const movePenalty = numMoves * 5; // Penalty: 5 points per move
    const timePenalty = duration; // Penalty: 1 point per second

    let finalScore = baseScore - movePenalty - timePenalty;
    return finalScore < 0 ? 0 : Math.round(finalScore); // Ensure the score is not negative and round it
};
```

## Card Shuffling Algorithm

To ensure a fair and random distribution of cards on the game board, we use the Fisher-Yates shuffle algorithm. This algorithm provides an unbiased shuffle, ensuring that each permutation of the array is equally likely.

### Fisher-Yates Shuffle Algorithm

The Fisher-Yates shuffle algorithm works as follows:
1. Iterate over the array from the last element to the first element.
2. For each element, generate a random index `j` such that `0 <= j <= i`.
3. Swap the current element with the element at the random index `j`.

This ensures that each element in the array has an equal probability of being placed in any position.

Here's the implementation of the Fisher-Yates shuffle algorithm used in our code:

```javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
```

This function is used to shuffle the array of cards before the game starts,
ensuring that each game has a unique and random card arrangement.

---






# React exercise - Internet Programming Course
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You need to add relevant npm libraries and of course run npm install.
You are given sample images for the project in the public folder. Feel free to use them or replace them with your own images.
## Authors

Name and email:

## General Information



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



---

