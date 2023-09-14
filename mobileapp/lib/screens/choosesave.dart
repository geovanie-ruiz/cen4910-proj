// LOAD SAVED GAMES

import 'package:flutter/material.dart';
import 'package:mobileapp/screens/login.dart';

class ChooseSave extends StatelessWidget {
  const ChooseSave({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Choose Save'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Center(
                child: Text(
                  'CHOOSE A SAVE SLOT',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const ElevatedButton(
                  onPressed: null,
                  child: Text('Slot 1')
              ),
              const ElevatedButton(
                  onPressed: null,
                  child: Text('Slot 2')
              ),
              const ElevatedButton(
                  onPressed: null,
                  child: Text('Slot 3')
              ),
              const Center(
                child: Text(
                  'BACK TO LOGIN',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (ctx) => const LoginScreen(),
                      )
                  );
                },
                icon: const Icon(
                  Icons.arrow_back,
                  size: 48,
                  color: Colors.deepOrange,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}