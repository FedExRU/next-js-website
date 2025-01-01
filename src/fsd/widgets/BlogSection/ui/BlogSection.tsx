import { Box, Grid2 as Grid } from '@mui/material'
import { Article, IArticle, useGetNewArticlesQuery } from '@fsd/entities'
import { ActionLink, Typography } from '@fsd/shared'
import { GoToArticle } from '@fsd/features'

export const BlogSection = () => {
  const { data, isLoading } = useGetNewArticlesQuery()

  const handleRenderAction = () => <GoToArticle skeleton={isLoading} />

  return (
    <Grid container>
      <Grid size="grow">
        <Typography variant={{ xs: 'h5', sm: 'h4' }}>Articles</Typography>
      </Grid>
      <Grid sx={{ display: 'flex', alignItems: 'end' }}>
        <ActionLink text="More Articles" />
      </Grid>
      <Grid size={12}>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {(isLoading
              ? (Array.from({ length: 3 }) as IArticle[])
              : data?.items
            )?.map((article, i) => (
              <Grid key={article?.id ?? i} size={{ xs: 12, md: 4 }}>
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
