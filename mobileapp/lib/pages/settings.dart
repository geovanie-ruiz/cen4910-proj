import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({Key? key}) : super(key: key);

  @override
  _MusicSettingsPageState createState() => _MusicSettingsPageState();
}

class _MusicSettingsPageState extends State<SettingsPage> {
  double _volume = 5.0;

  @override
  void initState() {
    super.initState();
    _loadVolumeSetting();
  }

  Future<void> _loadVolumeSetting() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _volume = prefs.getDouble('background_music_volume') ?? 5.0;
    });
  }

  Future<void> _saveVolumeSetting() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setDouble('background_music_volume', _volume);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Settings',
          style: TextStyle(
            color: Colors.amber,
            fontWeight: FontWeight.bold,
            fontSize: 24.0,
          ),
        ),
        backgroundColor: Colors.black,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          Image.asset(
            'assets/images/star_wars_logo4.png',
            width: 900,
            fit: BoxFit.fill,
          ),
          SizedBox(height: 24.0),
          const Text(
            'Background Music Volume',
            style: TextStyle(
              color: Colors.orange,
              fontWeight: FontWeight.bold,
              fontSize: 18.0,
            ),
          ),
          SliderTheme(
            data: SliderTheme.of(context).copyWith(
                activeTrackColor: Colors.deepOrange,
                inactiveTrackColor: Colors.grey,
                thumbColor: Colors.orange.withOpacity(0.95),
                overlayColor: Colors.orange.withOpacity(0.4),
                thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 15.0),
                overlayShape: const RoundSliderOverlayShape(overlayRadius: 30.0),
              ),
              child: Slider(
                value: _volume,
                onChanged: (newValue) {
                  setState(() {
                    _volume = newValue;
                  });
                },
                min: 0.0,
                max: 10.0,
                divisions: 10,
                label: _volume.toStringAsFixed(1),
              ),
            ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () async {
                  await _saveVolumeSetting(); // Save the music settings.
                  Navigator.of(context).pop(); // Close the settings page.
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orange.withOpacity(0.95), // Button color
                  foregroundColor: Colors.black, // Text color
                  side: const BorderSide(
                      color: Colors.deepOrange), // Border color
                  shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(10.0), // Border radius
                  ),
                  textStyle: const TextStyle(
                    fontSize: 20, // Font size
                  ),
                ),
                child: const Text('Save'),
              ),
              const SizedBox(width: 16.0),
              ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop(); // Close the settings page.
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orange.withOpacity(0.95), // Button color
                  foregroundColor: Colors.black, // Text color
                  side: const BorderSide(
                      color: Colors.deepOrange), // Border color
                  shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(10.0), // Border radius
                  ),
                  textStyle: const TextStyle(
                    fontSize: 20, // Font size
                  ),
                ),
                child: const Text('Cancel'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
