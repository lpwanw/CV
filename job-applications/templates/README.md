# Job Applications Tracker

## Usage

### Adding a New Application

1. Add entry to `applications.json`:
```json
{
  "id": "001",
  "company": "Company Name",
  "position": "Position Title",
  "status": "applied",
  "dateApplied": "2025-12-22",
  "salary": { "min": 0, "max": 0, "currency": "VND" },
  "jobUrl": "",
  "notes": ""
}
```

2. Create company folder: `companies/{company-name}/`
3. Copy `templates/company-template.md` to company folder

### Status Values

| Status | Description |
|--------|-------------|
| `applied` | Application submitted |
| `phone_screen` | Initial phone/video call scheduled |
| `interview` | Interview rounds in progress |
| `offer` | Received offer |
| `accepted` | Accepted offer |
| `rejected` | Rejected by company |
| `withdrawn` | Withdrew application |

### Folder Structure

```
job-applications/
├── companies/
│   ├── company-a/
│   │   └── interview-notes.md
│   └── company-b/
│       └── interview-notes.md
├── templates/
│   ├── company-template.md
│   └── README.md
└── applications.json
```

### Updating Stats

Manually update `stats` object when adding/changing applications:
- `total`: Total applications
- `applied`: Waiting for response
- `interviewing`: In interview process
- `offers`: Received offers
- `rejected`: Rejected applications
