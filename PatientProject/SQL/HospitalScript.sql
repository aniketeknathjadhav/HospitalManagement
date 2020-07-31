USE [PatientDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 31-07-2020 8.41.04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PatientList]    Script Date: 31-07-2020 8.41.04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PatientList](
	[id] [int] NOT NULL,
 CONSTRAINT [PK_PatientList] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProblemList]    Script Date: 31-07-2020 8.41.04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProblemList](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[patientProblem] [nvarchar](max) NULL,
	[patientid] [int] NOT NULL,
 CONSTRAINT [PK_ProblemList] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SignupPatientList]    Script Date: 31-07-2020 8.41.04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SignupPatientList](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [nvarchar](max) NULL,
	[lastName] [nvarchar](max) NULL,
	[gender] [nvarchar](max) NULL,
	[email] [nvarchar](450) NULL,
	[contact] [int] NOT NULL,
	[userName] [nvarchar](450) NULL,
	[password] [nvarchar](max) NULL,
 CONSTRAINT [PK_SignupPatientList] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProblemList]  WITH CHECK ADD  CONSTRAINT [FK_ProblemList_PatientList_patientid] FOREIGN KEY([patientid])
REFERENCES [dbo].[PatientList] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProblemList] CHECK CONSTRAINT [FK_ProblemList_PatientList_patientid]
GO
