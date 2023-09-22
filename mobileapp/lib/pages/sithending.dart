import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SithEnding extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Sith Ending',
          style: TextStyle(
            color: Colors.amber,
            fontWeight: FontWeight.bold,
            fontSize: 24.0,
          ),
        ),
        backgroundColor: Colors.black,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center, 
              children: [
                Align(
                  alignment: Alignment.topCenter,
                  child: Image.asset(
                    "assets/images/sith_ending.png",
                    width: 300,
                    fit: BoxFit.fill,
                  ),
                ),
                Text(
                  'You have joined your father as a Sith and embraced the dark side of the force. A new Sith Empire has been restored!',
                  style: GoogleFonts.rubik(
                    color: Colors.orange,
                    fontWeight: FontWeight.bold,
                    fontSize: 18.0,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20.0),
                Container(
                  padding: const EdgeInsets.all(20.0),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.orange.withOpacity(0.8),
                      width: 2.0,
                    ),
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Your Choices:',
                        style: TextStyle(
                          color: Colors.orange,
                          fontWeight: FontWeight.bold,
                          fontSize: 18.0,
                        ),
                      ),
                      SizedBox(height: 10.0),
                      // Add your choice stats here
                      Text(
                        'Choice 1: Embrace the Dark Side',
                        style: TextStyle(
                          color: Colors.orange,
                          fontSize: 16.0,
                        ),
                      ),
                      Text(
                        'Choice 2: Conquer the Galaxy',
                        style: TextStyle(
                          color: Colors.orange,
                          fontSize: 16.0,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pushReplacementNamed('/selectadventure');
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                    backgroundColor: Colors.orange.withOpacity(0.95),
                    foregroundColor: Colors.black,
                    side: const BorderSide(color: Colors.deepOrange),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    textStyle: const TextStyle(
                      fontSize: 16,
                    ),
                  ),
                  child: const Text('Play Again'),
                ),
                const SizedBox(width: 20.0),
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pushReplacementNamed('/');
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                    backgroundColor: Colors.orange.withOpacity(0.95),
                    foregroundColor: Colors.black,
                    side: const BorderSide(color: Colors.deepOrange),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    textStyle: const TextStyle(
                      fontSize: 16,
                    ),
                  ),
                  child: const Text('Return to Login'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
