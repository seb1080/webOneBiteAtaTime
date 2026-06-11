# Installing Supabase

- [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=access-method&access-method=postgres&queryGroups=platform&platform=macos)

- [Migration Example](https://supabase.com/docs/guides/deployment/database-migrations)

Validate supabase is installed.

```bash
supabase --version
brew upgrade supabase
```

Start existing local supabase instance.

```bash
supabase login
supabase projects list
supabase projects create
supabase link

cd <project-folder>

supabase init # Will add supabase/config.toml
supabase link

supabase migration list
supabase migration fetch
supabase db pull --debug

supabase migration new create_building_tables
```

## Migration workflow first call

```bash
# Fresh new database on the remote
# Add postgis extensions on the remote
supabase migration list
supabase migration fetch
# Update with the remote version of the DB
supabase db pull --schema auth,storage --debug

supabase migration new create_*_tables
# Update script create_*_tables
supabase db diff  --debug

supabase migration up
# supabase db reset to seed the database

supabase db push --include-seed  --debug

supabase migration list ## Sync of the migration locally and remote
```

## Migration workflow second iteration

```bash
# Fresh new database on the remote
# Add postgis extensions on the remote
supabase migration list
supabase migration fetch # Over right local changes

supabase db diff # Diffs schema changes made to the local or remote database.
supabase db pull --schema auth,storage  --debug

supabase migration new create_*_tables
# Update migration
supabase migration up # To apply latest added migration file
supabase migration list # To view additional migration to Local

supabase db push --include-seed  --debug

supabase migration list ## Sync of the migration locally and remote
```

## [Seeding](https://supabase.com/docs/guides/local-development/seeding-your-database)

add file `supabase/seed.sql`

## Import data into a supabase

- [Import data into supabase](https://supabase.com/docs/guides/database/import-data)

### Upload a .csv file by the interface *Table Editor

*I experiment slow import type and icomplete import*

## Use DBeaver PostgreSQL client

To create a table from SQL script and import data from csv format.

*I experiment fast import with a csv file of 6 columns with geom and 66 rows*

### Bulk import using pgloader

Installing pgloader on macOS

```bash
brew update
brew install pgloader
pgloader --version
```
