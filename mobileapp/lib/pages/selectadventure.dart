// SELECT ADVENTURE

import 'package:flutter/material.dart';
import 'package:mobileapp/pages/login.dart';

class SelectAdventure extends StatelessWidget {
  const SelectAdventure({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTextStyle(
      style: TextStyle(color: Colors.orangeAccent),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.width/2,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Align(
                    alignment: Alignment.topCenter,

                    child: Image.asset(
                      "assets/images/star_wars_logo4.png",
                      width: 900,
                      fit: BoxFit.fill,
                    ),
                  )
                ],
              ),
            ),

            Padding(
              padding: EdgeInsets.only(left: 20, right: 20),
              child: Column(
                children: [
                  const SizedBox(
                    height: 75,
                  ),
                  const Center(
                    child: Text(
                      'CHOOSE YOUR ADVENTURE',
                      style: TextStyle(
                        color: Colors.orangeAccent,
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 40,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, "/story");
                    },
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.orangeAccent,
                      backgroundColor: Colors.orangeAccent.withOpacity(0.8),
                      fixedSize: const Size(450.0, 40.0),
                    ),
                    child: const Text(
                      'ADVENTURE 1: Ghost of Vader',
                      style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                          fontWeight: FontWeight.bold
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, "/story");
                    },
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.orangeAccent,
                      backgroundColor: Colors.orangeAccent.withOpacity(0.8),
                      fixedSize: const Size(450.0, 40.0),
                    ),
                    child: const Text(
                      'ADVENTURE 2: Mythical Lands',
                      style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                          fontWeight: FontWeight.bold
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, "/story");
                    },
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.orangeAccent,
                      backgroundColor: Colors.orangeAccent.withOpacity(0.8),
                      fixedSize: const Size(450.0, 40.0),
                    ),
                    child: const Text(
                      'ADVENTURE 3: Medieval Adventure',
                      style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                          fontWeight: FontWeight.bold
                      ),
                    ),
                  ),
                  const SizedBox(
                      height: 75
                  ),
                  ElevatedButton.icon(
                    style: ButtonStyle(
                      backgroundColor: MaterialStateColor.resolveWith((states) => Colors.black26),
                    ),
                    icon: const Icon(Icons.arrow_back, color: Colors.orangeAccent,),
                    label: const Text(
                      'Return to Saves',
                      style: TextStyle(
                        color: Colors.orangeAccent,
                        fontSize: 18,
                      ),
                    ),
                    onPressed: () {
                      Navigator.pushNamed(context, "/choosesave");
                    },
                  ),
                ],
              ),
            ),

          ],
        ),
      ),
    );
  }
}