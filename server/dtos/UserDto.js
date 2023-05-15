class UserDto {
    constructor(id, email, password, isActivated, activationLink, createdAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.isActivated = isActivated;
        this.activationLink = activationLink;
        this.createdAt = createdAt;
    }
}

module.exports = UserDto;