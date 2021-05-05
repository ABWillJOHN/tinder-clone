### Description
SDK repacking script.
The script reduces the size of the SDK by keeping only resources defined in the token.

### Usage
```sdk_repacking.py --config=path/to/config.json --ios=path/to/ios/sdk --android=path/to/android/sdk -o=path/to/output/folder```

`--config` - the path to configuration file with the description of Banuba SDK files defined by the client token. All other resources will be deleted.

`--ios` - BNBEffectPlayer for iOS folder location.

`--android` - BNBEffectPlayer for Android folder location.

`-o` - an output folder location used to store the repacked SDK. If `-o` flag is missing the script will repack original files to the folders provided by `--ios`/`--android` flags.

### Config file
With the client token you will receive a configuration file in `json` format.

Structure:
```
{
    "CoreML": [
        "cml/coreMLBody.mlmodelc/",
        ...
        "cml/coreMLEyesCorrection.mlmodelc/"
    ],
    "Android": [
        "android_nn/URfywYdpDX.bin",
        ...
        "android_nn/pytLptvqBJ.bin"
    ],
    "TF": [
        "flow/squared_p_uint8.tflite",
        ...
        "celebrity_match/celebrity_match.tflite"
    ],
    "default": [
        ...
    ]
}
```

