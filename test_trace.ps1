Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PWD\assets\icons\WhatsApp Image 2026-11-12 at 23.27.27.jpeg")
$width = $img.Width
$height = $img.Height

# Threshold image into 2D array
$grid = New-Object 'int[,]' $height, $width
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $img.GetPixel($x, $y)
        # Luminance
        $lum = 0.299*$c.R + 0.587*$c.G + 0.114*$c.B
        if ($lum -lt 140) {
            $grid[$y, $x] = 1
        } else {
            $grid[$y, $x] = 0
        }
    }
}
$img.Dispose()

Write-Host "Grid populated: $width x $height"

# Collect directed edges
# Key: "x1,y1" -> list of "x2,y2"
$edgesFrom = @{}

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        if ($grid[$y, $x] -eq 1) {
            # Top neighbor
            if ($y -eq 0 -or $grid[$y - 1, $x] -eq 0) {
                # Edge: (x, y) -> (x+1, y)
                $k = "$x,$y"; $v = "$($x+1),$y"
                if (-not $edgesFrom.ContainsKey($k)) { $edgesFrom[$k] = [System.Collections.Generic.List[string]]::new() }
                $edgesFrom[$k].Add($v)
            }
            # Right neighbor
            if ($x -eq $width - 1 -or $grid[$y, $x + 1] -eq 0) {
                # Edge: (x+1, y) -> (x+1, y+1)
                $k = "$($x+1),$y"; $v = "$($x+1),$($y+1)"
                if (-not $edgesFrom.ContainsKey($k)) { $edgesFrom[$k] = [System.Collections.Generic.List[string]]::new() }
                $edgesFrom[$k].Add($v)
            }
            # Bottom neighbor
            if ($y -eq $height - 1 -or $grid[$y + 1, $x] -eq 0) {
                # Edge: (x+1, y+1) -> (x, y+1)
                $k = "$($x+1),$($y+1)"; $v = "$x,$($y+1)"
                if (-not $edgesFrom.ContainsKey($k)) { $edgesFrom[$k] = [System.Collections.Generic.List[string]]::new() }
                $edgesFrom[$k].Add($v)
            }
            # Left neighbor
            if ($x -eq 0 -or $grid[$y, $x - 1] -eq 0) {
                # Edge: (x, y+1) -> (x, y)
                $k = "$x,$($y+1)"; $v = "$x,$y"
                if (-not $edgesFrom.ContainsKey($k)) { $edgesFrom[$k] = [System.Collections.Generic.List[string]]::new() }
                $edgesFrom[$k].Add($v)
            }
        }
    }
}

Write-Host "Edges collected: $($edgesFrom.Count) start vertices"

# Chain edges into loops
$loops = [System.Collections.Generic.List[System.Collections.Generic.List[string]]]::new()

$keys = [System.Collections.Generic.List[string]]::new($edgesFrom.Keys)
foreach ($startKey in $keys) {
    while ($edgesFrom.ContainsKey($startKey) -and $edgesFrom[$startKey].Count -gt 0) {
        $loop = [System.Collections.Generic.List[string]]::new()
        $curr = $startKey
        $loop.Add($curr)
        
        while ($true) {
            if (-not $edgesFrom.ContainsKey($curr) -or $edgesFrom[$curr].Count -eq 0) {
                break
            }
            $next = $edgesFrom[$curr][0]
            $edgesFrom[$curr].RemoveAt(0)
            if ($edgesFrom[$curr].Count -eq 0) {
                $edgesFrom.Remove($curr)
            }
            
            if ($next -eq $startKey) {
                # loop closed
                break
            }
            $loop.Add($next)
            $curr = $next
        }
        
        if ($loop.Count -ge 4) {
            $loops.Add($loop)
        }
    }
}

Write-Host "Found $($loops.Count) loops"
