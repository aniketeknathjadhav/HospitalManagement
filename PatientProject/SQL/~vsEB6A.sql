USE [PatientDb]
GO
/****** Object:  Table [dbo].[tblPatientList]    Script Date: 23-06-2020 12.17.00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblPatientList](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[patientName] [nvarchar](max) NULL,
	[patientProblem] [nvarchar](max) NULL,
 CONSTRAINT [PK_tblPatientList] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
