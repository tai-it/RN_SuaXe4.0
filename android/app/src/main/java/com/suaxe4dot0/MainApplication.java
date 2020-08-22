package com.suaxe4dot0;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import java.util.Arrays;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

// Firebase
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

// Maps
import com.airbnb.android.react.maps.MapsPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

// Gradient
import com.BV.LinearGradient.LinearGradientPackage;

// SplashScreen
import org.devio.rn.splashscreen.SplashScreenReactPackage;

public class MainApplication extends NavigationApplication {

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new AsyncStoragePackage(),
            new MapsPackage(),
            new RNFusedLocationPackage(),
            new RNGeocoderPackage(),
            new ReactNativeFirebaseAppPackage(),
            new ReactNativeFirebaseAuthPackage(),
            new ReactNativeFirebaseMessagingPackage(),
            new ReactNativePushNotificationPackage(),
            new LinearGradientPackage(),
            new SplashScreenReactPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
