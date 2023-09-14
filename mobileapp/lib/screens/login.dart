// LOGIN PAGE
// REQUIRES username, password
// POPUP DIALOG BOX on failure to log in

import 'package:flutter/material.dart';
import 'package:mobileapp/screens/choosesave.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Log In'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            const Text(
            'TODO:'
                '\n\n\t\tImplement Login Screen widgets'
                '\n\n\t\tImplement Create Account Screen'
                '\n\n\t\tImplement Choose Saved Game Screen'
                '\n\n\t\tImplement Choose Adventure Screen',
              style: TextStyle(
                color: Colors.white70,
                fontSize: 24,
              ),
            ),
            IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (ctx) => const ChooseSave(),
                      )
                  );
                },
                icon: const Icon(
                  Icons.login,
                  size: 48,
                  color: Colors.deepOrange,
                ),
            )
          ],
        ),
      ),
    );
  }
}





