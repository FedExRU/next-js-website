import { Article, IArticle, useGetNewArticlesQuery } from '@fsd/entities'
import { GoToArticle } from '@fsd/features'
import { ActionLink, Typography } from '@fsd/shared'
import { Box, Grid2 as Grid } from '@mui/material'

export const BlogSection = () => {
  const { data, isLoading } = useGetNewArticlesQuery()

  const handleRenderAction = () => <GoToArticle skeleton={isLoading} />

  return (
    <Grid container>
      <Grid size="grow">
        <Typography component="h4" variant={{ sm: 'h4', xs: 'h5' }}>
          Articles
        </Typography>
      </Grid>
      <Grid sx={{ alignItems: 'end', display: 'flex' }}>
        <ActionLink text="More Articles" />
      </Grid>
      <Grid size={12}>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {(isLoading
              ? (Array.from({ length: 3 }) as IArticle[])
              : data?.items
            )?.map((article, i) => (
              <Grid key={article?.id ?? i} size={{ md: 4, xs: 12 }}>
                <Article
                  skeleton={isLoading}
                  {...article}
                  renderAction={handleRenderAction}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
