import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width, 10) || 800;
  const height = parseInt(params.height, 10) || 600;
  
  // Redirect to a placeholder image service
  return NextResponse.redirect(`https://picsum.photos/${width}/${height}`);
}
