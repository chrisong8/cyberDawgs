CREATE TABLE [tblFunction](
	[FunctionID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[FunctionName] [ntext] NULL,
	[FunctionAbbrev] [ntext] NULL,
	[FunctionSummary] [ntext] NULL
)
GO

CREATE TABLE [tblCategory](
	[CategoryID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[FunctionID] [INTEGER] NULL,
	[CategoryName] [text] NULL,
	[CategorySummary] [text] NULL,
	[CategoryAbbrev] [text] NULL,
	FOREIGN KEY(FunctionID) REFERENCES tblFunction(FunctionID)
)
GO

CREATE TABLE [tblSubcategory](
	[SubcategoryID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[CategoryID] [INTEGER] NULL,
	[SubcategorySummary] [text] NULL,
	[SubcategoryAbbrev] [text] NULL,
	FOREIGN KEY(CategoryID) REFERENCES tblCategory(CategoryID)
)
GO

CREATE TABLE [tblControlFamily](
	[ControlFamilyID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[ControlFamilyName] [text] NULL,
	[ControlFamilyAbbrev] [text] NULL
)
GO

CREATE TABLE [tblControl](
	[ControlID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[ControlFamilyID] [INTEGER] NULL,
	[ControlName] [text] NULL,
	[ControlAbbrev] [text] NULL,
	[ControlStatement] [text] NULL,
	[ControlGuidance] [text] NULL,
	FOREIGN KEY(ControlFamilyID) REFERENCES tblControlFramily(ControlFamilyID)
);
GO

CREATE TABLE [tblControlSubcategory](
	[ControlSummaryID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[ControlID] [INTEGER] NULL,
	[SubcategoryID] [INTEGER] NULL,
	FOREIGN KEY(SubcategoryID) REFERENCES tblSubcategroy(SubcategoryID),
	FOREIGN KEY(ControlID) REFERENCES tblControl(ControlID)
);
GO

CREATE TABLE [tblControlEnhancement](
	[ControlEnhancementID] [INTEGER] NOT NULL PRIMARY KEY AUTOINCREMENT,
	[ControlID] [INTEGER] NULL,
	[ControlEnhancementStatement] [text] NULL,
	[ControlEnhancementAbbrev] [text] NULL,
	[ControlEnhancementName] [text] NULL,
	[ControlEnhancementGuidence] [text] NULL,
	FOREIGN KEY(ControlID) REFERENCES tblControl(ControlID)
);
GO

