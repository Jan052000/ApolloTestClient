export var Person: PersonType = {
  "Name": "Anstice",
  "Age": 65,
  "Children": [
    {
      "Name": "Charleen",
      "Age": 31,
      "Children": [
        {
          "Name": "Phelia",
          "Age": 740,
          "Children": [
            {
              "Name": "Jörn",
              "Age": 0,
              "Children": [],
              "Id": "0"
            }
          ],
          "Id": "0c1b54ce-114c-40c9-b4cd-5a47627320b0"
        },
        {
          "Name": "Nat",
          "Age": 929,
          "Children": [
            {
              "Name": "Yannic",
              "Age": 0,
              "Id": "0",
              "Children": []
            }
          ],
          "Id": "65010a20-5aea-4dfd-8dbe-9b9bf7cdfe3e"
        },
        {
          "Name": "Jessy",
          "Age": 714,
          "Children": [],
          "Id": "c4b08b6a-ecfe-4993-bf15-ad1172068790"
        },
        {
          "Name": "Maryrose",
          "Age": 635,
          "Children": [],
          "Id": "d5c2b959-4424-4a73-9c55-0f33434aa06a"
        }
      ],
      "Id": "a457bca3-0752-4410-8445-9169af5e9a18"
    },
    {
      "Name": "Letisha",
      "Age": 185,
      "Children": [
        {
          "Name": "Abby",
          "Age": 597,
          "Children": [],
          "Id": "89a96750-b9c1-45ed-a26e-cca0103b2e62"
        },
        {
          "Name": "Bobine",
          "Age": 354,
          "Children": [],
          "Id": "48a40c13-5a21-4394-b7d1-3376e73d5b7d"
        },
        {
          "Name": "Barbara-Anne",
          "Age": 737,
          "Children": [],
          "Id": "1e1d1d91-3d58-4a38-9795-4cfee61abf1b"
        },
        {
          "Name": "Ruperta",
          "Age": 4,
          "Children": [],
          "Id": "d60f2815-948c-42ab-ba6a-ec24203bd436"
        }
      ],
      "Id": "efed53cb-dd51-49e0-ab19-d21cc4394048"
    },
    {
      "Name": "Rakel",
      "Age": 7,
      "Children": [
        {
          "Name": "Lisbeth",
          "Age": 61,
          "Children": [],
          "Id": "abf29a34-bfec-4d43-a635-82af64625dd2"
        },
        {
          "Name": "Kally",
          "Age": 980,
          "Children": [],
          "Id": "f8ecd3f2-b8a3-49f7-80ca-22537a79c9d4"
        },
        {
          "Name": "Tabbatha",
          "Age": 774,
          "Children": [],
          "Id": "1532669e-920b-46ab-b725-51435c7c601d"
        },
        {
          "Name": "Editha",
          "Age": 141,
          "Children": [],
          "Id": "89a10f45-aa04-4c33-a5a8-7bd2f4d007b0"
        }
      ],
      "Id": "cd54a7ae-5f04-4b02-a052-b5b80a832785"
    },
    {
      "Name": "Nalani",
      "Age": 576,
      "Children": [
        {
          "Name": "Merrili",
          "Age": 510,
          "Children": [],
          "Id": "ac90f756-7dc3-4654-b58f-a90042f1a704"
        },
        {
          "Name": "Lenore",
          "Age": 792,
          "Children": [],
          "Id": "03caaeb9-b72e-4916-b19e-661a738aee39"
        },
        {
          "Name": "Ophelie",
          "Age": 1,
          "Children": [],
          "Id": "07c6b751-4c57-4003-9e02-65585dd33841"
        },
        {
          "Name": "Lauren",
          "Age": 878,
          "Children": [],
          "Id": "e3874486-ae27-4970-ace1-55157c244be2"
        }
      ],
      "Id": "9d7f28fb-903f-466b-b8a9-42bb7304c0fe"
    }
  ],
  "Id": "7092a37c-c87e-4026-8be9-e321974a92f4"
}

export interface PersonType{
  Name: string,
  Id: string,
  Age: number,
  Children: PersonType[];
}