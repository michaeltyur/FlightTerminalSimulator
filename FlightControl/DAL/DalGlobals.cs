using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public static class DalGlobals
    {
        public const int MAX_DISTANCE_TO_TERMINAL = 2000000;

        public const int MAX_TERMINAL_CAPACITY = 15;

        public const int MAX_PLANS_IN_STOCK_ZONE = 6;

        public const int MAX_PLANS_STEP3 = 2;

        public const int STEP1_LENGTH = 1000000;
        public const int STEP1_MIN_SPEED = 300;
        public const int STEP1_MAX_SPEED = 700;

        public const int STEP2_LENGTH = 700000;
        public const int STEP2_MIN_SPEED = 250;
        public const int STEP2_MAX_SPEED = 500;

        public const int STEP3_LENGTH = 300000;
        public const int STEP3_MIN_SPEED = 200;
        public const int STEP3_MAX_SPEED = 300;

        public const int RUNWAY_LENGTH = 5000;
        public const int RUNWAY_MIN_SPEED = 150;
        public const int RUNWAY_MAX_SPEED = 250;

        public const int PARKING5_LEFT_LENGTH = 1000;

        public const int PARKING8_RIGHT_LENGTH = 1000;

        public const int LOADING_UNLOADING_6_LENGTH = 1000;

        public const int LOADING_UNLOADING_7_LENGTH = 1000;

        public const int TAKEOFF9_LENGTH = 5000;
        public const int TAKEOFF9_MIN_SPEED = 200;
        public const int TAKEOFF9_MAX_SPEED = 400;


    }
}
